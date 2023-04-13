# Use the latest Microsoft Windows Server Core image with IIS
FROM mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022

# Install Python 3.9
RUN powershell.exe -Command " \
    Invoke-WebRequest https://www.python.org/ftp/python/3.9.7/python-3.9.7-amd64.exe -OutFile python-3.9.7.exe ; \
    Start-Process python-3.9.7.exe -ArgumentList '/quiet InstallAllUsers=1 PrependPath=1' -Wait ; \
    Remove-Item python-3.9.7.exe -Force \
"

# Create the folders for the applications
RUN mkdir C:\\app\\frontend
RUN mkdir C:\\app\\backend

# Copy the Angular application to C:\app\frontend
COPY okta-sample-frontend/dist C:\\app\\frontend

# Copy the Flask application to C:\app\backend
COPY okta-sample-backend/dist/okta-sample-backend-1.0.tar.gz C:\\app\\backend

# Install the Flask application
RUN powershell.exe -Command " \
    pip install C:\app\backend\okta-sample-backend-1.0.tar.gz ; \
"

# Add a new website to IIS for the Angular application
RUN powershell.exe -Command " \
    Import-Module IISAdministration ; \
    New-IISSite -Name 'Frontend' -PhysicalPath 'C:\app\frontend' -BindingInformation '*:80:' ; \
"

# Add a virtual directory to the website for the Flask application
RUN powershell.exe -Command " \
    Import-Module IISAdministration ; \
    New-Item 'IIS:\Sites\Frontend' -Name 'api' -PhysicalPath 'C:\app\backend' -Type 'VirtualDirectory' ; \
"


# Expose port 80
EXPOSE 80
