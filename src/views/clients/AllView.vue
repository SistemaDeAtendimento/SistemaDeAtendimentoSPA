<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const clients = ref([]);
const router = useRouter();

onMounted(async () => {
    const response = await fetch('http://localhost:8000/admin/lista_clientes', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    const result = await response.json();
    clients.value = result.lista_clientes;
});

const nextPage = (path) => {
    router.push(path);
}
</script>

<template>
    <h1>Listagem de Clientes</h1>
    <div class="container">
        <div class="container-lista">
            <div class="buttons">
                <button @click="nextPage('/client/create')">Cadastrar Cliente</button>
                <button @click="nextPage('/service/create')">Cadastrar Serviço</button>
            </div>
            <div v-for="cliente in clients" :key="cliente.id" class="lista-item">
                <div class="item-content">
                    <div class="content-top">
                        <h2>{{ cliente.nome }}</h2>
                    </div>
                    <div class="content-bottom">
                        <h3><b>cpf: </b>{{ cliente.cpf }}</h3>
                        <h3><b>telefone: </b>{{ cliente.telefone }}</h3>
                    </div>
                </div>
                <div class="item-buttons">
                    <button class="edit-button" @click="nextPage('/client/edit/' + cliente.id)">Editar</button>
                    <button class="remove-button" @click="nextPage('/cliente/remove/' + cliente.id)">Excluir</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
}

.buttons {
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    margin-bottom: 20px;
}

.container-lista {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.lista-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
}

.item-content {
    display: flex;
    flex-direction: column;
}

.content-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

h2 {
    font-weight: bold;
}

.content-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    font-weight: 100;
}

b {
    font-weight: 700;
}

.item-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.item-buttons>button {
    padding: 5px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    height: 40px;
}

.remove-button {
    background-color: #f44336;
}

.edit-button {
    background-color: #ccec17;
}

button {
    font-weight: 800;
    padding: 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>