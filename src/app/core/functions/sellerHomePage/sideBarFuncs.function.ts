export function getNumberReference(reference: string): number {
    let numberReference: number = 0;

    if (reference === 'btnInfoUser') {
        numberReference = 1;
        return numberReference;
    }
    if (reference === 'btnProductInfo') {
        numberReference = 2;
        return numberReference;
    }
    if (reference === 'btnSellsInform') {
        numberReference = 3;
        return numberReference;
    }
    if (reference === 'btnSupport') {
        numberReference = 4;
        return numberReference;
    }
    if (reference === 'btnFacturation') {
        numberReference = 5;
        return numberReference;
    }

    return numberReference;
}