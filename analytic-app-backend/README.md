
# Prerequisites

## Linux

```
sudo apt install python3-virtualenv
python -m virtualenv venv
source venv/bin/activate
```

## MacOS

```
pip install virtualenv
python -m virtualenv venv
source venv/bin/activate
```

## Windows

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted

python -m pip install --user virtualenv
python -m virtualenv venv
venv\Scripts\activate
```

# Commands

## Install requirements

```
python setup.py sdist
pip install ./dist/analytic-app-backend-1.0.tar.gz
``` 

## Token validation

```
$Env:JWT="...token for validation..."
python token_validation.py
```

## Run the Flask app

### MacOS/Linux
```
export FLASK_APP="api"
flask run
```

### Windows
```
$Env:FLASK_APP="api"
flask run
```
