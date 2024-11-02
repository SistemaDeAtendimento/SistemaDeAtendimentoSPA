<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const nome = ref('');
const cpf = ref('');
const telefone = ref('');
const router = useRouter();
const route = useRoute();
const clienteId = route.params.id;

const carregarCliente = async () => {
    try {
        const response = await fetch('http://0.0.0.0:8000/admin/lista_clientes', {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const result = await response.json();
            let clienteEncontrado = null;
            result.lista_clientes.forEach(cliente => {

                if (cliente.id == clienteId) {
                    clienteEncontrado = cliente;
                }
            });

            if (clienteEncontrado) {
                nome.value = clienteEncontrado.nome;
                cpf.value = clienteEncontrado.cpf;
                telefone.value = clienteEncontrado.telefone;
            } else {
                alert('Cliente não encontrado');
                router.push('/client');
            }
        } else {
            alert('Erro ao carregar dados do cliente');
        }
    } catch (error) {
        alert(`Erro ao carregar dados do cliente: ${error.message}`);
    }
};

const editarCliente = async () => {
    try {
        const response = await fetch(`http://0.0.0.0:8000/cliente/editar_cliente/${clienteId}`, {
            method: 'PUT',
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
            const errorData = await response.json();
            alert(`Erro ao editar cliente: ${errorData.message}`);
        }
    } catch (error) {
        alert(`Erro ao editar cliente: ${error.message}`);
    }
};

onMounted(() => {
    carregarCliente();
});
</script>

<template>
    <main>
        <h1>Editar Cliente</h1>
        <div class="container">
            <form @submit.prevent="editarCliente">
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
                <button type="submit">Salvar</button>
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