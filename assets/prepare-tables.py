import json
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader("templates"))

def handle_publications():
  def authorList(authors):
    if not authors:
      return ""
    elif len(authors) == 1:
      return authors[0]
    elif len(authors) == 2:
      return f"{authors[0]} and {authors[1]}"
    else:
      return f"{', '.join(authors[:-1])}, and {authors[-1]}"

  with open("assets/publications.json", "r", encoding="utf8") as input:
    publications = json.load(input)

  template = env.get_template("publications.html")
  output = template.render(publications=publications, authorList=authorList)

  with open("_generated/publications.html", "w") as file:
    file.write(output)


def handle_presentations():
  with open("assets/presentations.json", "r", encoding="utf8") as input:
    presentations = json.load(input)

  template = env.get_template("presentations.html")
  output = template.render(presentations=presentations)

  with open("_generated/presentations.html", "w") as file:
    file.write(output)


def handle_supervisions():
  with open("assets/supervisions.json", "r", encoding="utf8") as input:
    supervisions = json.load(input)

  template = env.get_template("supervisions.html")
  output = template.render(supervisions=supervisions)

  with open("_generated/supervisions.html", "w") as file:
    file.write(output)


def handle_teachings():
  with open("assets/teachings.json", "r", encoding="utf8") as input:
    teachings = json.load(input)

  template = env.get_template("teachings.html")
  output = template.render(teachings=teachings)

  with open("_generated/teachings.html", "w") as file:
    file.write(output)


handle_publications()
handle_presentations()
handle_supervisions()
handle_teachings()
