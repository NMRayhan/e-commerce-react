const getTotalPrice = (product) =>{
    const total = product.reduce((previous, current)=> previous + current.price, 0); 
    return total;
}

const getShipping = (product) => {
    const total = product.reduce((previous, current)=>previous + current.shipping, 0);
    return total;
}

const getTexCalculation = (total, shipping) =>{
    const textTotal = total + shipping;
    const tex = textTotal*.15;
    return Math.floor(tex);
}

const getTotalGrandPrice = (total, shipping, tex) =>{
    const grandTotal = total + shipping + tex;
    return grandTotal;
}

export {getTotalPrice, getShipping, getTexCalculation, getTotalGrandPrice}