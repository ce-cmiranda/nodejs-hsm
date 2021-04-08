import requests
# Test create
# r = requests.post('http://localhost:3000/alunos', json={"nome": "Carlos",
# "media":10
# })

# Test Delete
# alunoId = "6068f4f6c96cf82ba098c180"
# r = requests.delete('http://localhost:3000/alunos/'+alunoId)


# Test Update
alunoId = "6068f492ce254c0fa0b46507"
r = requests.put('http://localhost:3000/alunos/'+alunoId, json={"nome": "Eduardo",
"media":9
})
print(r.status_code)