<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const nome = ref('');
const cpf = ref('');
const telefone = ref('');
const router = useRouter();

const cadastrarCliente = async () => {
    const response = await fetch('http://0.0.0.0:8000/cliente/cadastro_cliente', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome.value,
            cpf: cpf.value,
            telefone: telefone.value
        })
    });

    if (response.ok) {
        router.push('/client');
    } else {
        alert('Erro ao cadastrar cliente');
    }
};
</script>

<template>
    <main>
        <h1>Cadastro de Cliente</h1>
        <div class="container">
            <form @submit.prevent="cadastrarCliente">
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" v-model="nome" required />
                </div>
                <div class="form-group">
                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" v-model="cpf" required />
                </div>
                <div class="form-group">
                    <label for="telefone">Telefone:</label>
                    <input type="text" id="telefone" v-model="telefone" required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </main>
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

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    font-weight: 800;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}
</style>