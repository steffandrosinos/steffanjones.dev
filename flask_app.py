from flask import Flask, render_template, redirect

app = Flask(__name__)

# Redirect 404
@app.errorhandler(404)
def handle_404(e):
    return render_template("404.html")

# non-www traffic
@app.route('/')
def non_www_index():
    return redirect("https://www.steffanjones.dev", code=302)

# cli traffic
@app.route('/', subdomain="cli")
def cli():
    return render_template("cli.html")

# www traffic
@app.route('/', subdomain="www")
def index():
    return render_template("index.html")

@app.route('/cv/', subdomain="www")
def cv():
    return render_template("cv.html")

# CV redirects
@app.route('/cv/')
def index_cv():
    return redirect("https://www.steffanjones.dev/cv/", code=302)
@app.route('/cv/', subdomain="cli")
def cli_cv():
    return redirect("https://www.steffanjones.dev/cv/", code=302)
