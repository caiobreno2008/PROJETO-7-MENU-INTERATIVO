function showMenu() {
    let choice;
    do {
        choice = prompt("Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3\n4. Opção 4\n5. Encerrar");
        switch (choice) {
            case '1': console.log("Você escolheu a Opção 1"); break;
            case '2': console.log("Você escolheu a Opção 2"); break;
            case '3': console.log("Você escolheu a Opção 3"); break;
            case '4': console.log("Você escolheu a Opção 4"); break;
            case '5': console.log("O sistema está sendo encerrado"); break;
            default: console.log("Escolha inválida, tente novamente."); break;
        }
    } while (choice !== '5');
}

showMenu();
