<script setup>

</script>

<template>
    <header>
        <div class="container">
            <nav>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/service">Services</router-link></li>
                    <li><router-link to="/client">Clientes</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>



<style scoped>
header {
    position: relative;
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

nav ul li {
    display: inline;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
}

nav ul li a:hover {
    background-color: #555;
    border-radius: 5px;
}
</style>