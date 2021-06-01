import requests

url = "https://www.google.com"
res = requests.get(url)
print(f"your request to {url} came back w/ status code {res.status_code}")
