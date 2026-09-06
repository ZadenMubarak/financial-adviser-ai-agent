echo "Setting up the environment for the financial adviser AI agent..."

#react
cd frontend
npm install
echo "React frontend dependencies installed."

#python
cd ..
pip install -r requirements.txt
echo "Python dependencies installed."

echo "activate virtual environment with 'source venv/bin/activate' on linux and 'venv\\Scripts\\activate' on Windows and run 'python API_Serve.py' to start the Flask server."