import requests
import json
# Test create
# r = requests.post('http://localhost:3000/alunos', json={"name": "Miranda",
# "average":10
# })



# Test Delete
alunoId = "1"
r = requests.delete('http://localhost:3000/alunos/'+alunoId)


# Test Update
# alunoId = "1"
# r = requests.put('http://localhost:3000/alunos/'+alunoId, json={"name": "Eduardo",
# "average":9
# })

# print(r.content)

for property, value in vars(r).items():
    print(property, ":", value)