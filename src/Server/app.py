from flask import Flask, render_template

# Creates a new Flask App
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('signin.jsx')


# If the program is running
if __name__ == '__main__':
    # If any errors, catches the error immediately
    app.run(debug=True)

