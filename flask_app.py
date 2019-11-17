from flask import Flask, render_template, redirect

app = Flask(__name__)

#Redirect 404
@app.errorhandler(404)
def handle_404(e):
    return render_template("404.html")

#Redirect non-www traffic
@app.route('/')
def non_www_index():
    return redirect("https://cli.steffanjones.dev", code=302)

@app.route('/', subdomain="www")
def index():
    return redirect("https://cli.steffanjones.dev", code=302)
    
@app.route('/', subdomain="cli")
def cli():
    return render_template("index.html")