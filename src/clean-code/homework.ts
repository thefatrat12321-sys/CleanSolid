(() => {

    // Frutas rojas en una constante con nombre: evita la triple condición y documenta la intención
    const RED_FRUITS: readonly string[] = ['manzana', 'cereza', 'ciruela'];

    function isRedFruit(fruit: string): boolean {
        return RED_FRUITS.includes(fruit);
    }

    // Tabla de búsqueda en lugar de la cadena de if / else if
    const FRUITS_BY_COLOR: Readonly<Record<string, readonly string[]>> = {
        red: ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas'],
    };

    function getFruitsByColor(color: string): string[] {
        const fruits = FRUITS_BY_COLOR[color];

        if (!fruits) {
            const validColors = Object.keys(FRUITS_BY_COLOR).join(', ');
            throw new Error(`the color must be: ${validColors}`);
        }

        // Se devuelve una copia para no exponer el arreglo interno de la constante
        return [...fruits];
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps(): string {
        const steps = [
            { name: 'First', isWorking: isFirstStepWorking },
            { name: 'Second', isWorking: isSecondStepWorking },
            { name: 'Third', isWorking: isThirdStepWorking },
            { name: 'Fourth', isWorking: isFourthStepWorking },
        ];

        const brokenStep = steps.find((step) => !step.isWorking);

        return brokenStep ? `${brokenStep.name} step broken.` : 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de los flags de los pasos y esperar los resultados


})();
