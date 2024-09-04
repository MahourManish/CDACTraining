module.exports = (() =>{
    let cart = [];
    const addItem = (n,q,p) => cart.push({
        id: maxId() + 1, item: n, quantity: q, price: p
    });
    const getAll = () => cart;
    const maxId = () => {
        let mx = 0;
        cart.forEach(a => mx = mx<a.id?a.id:mx)
        return mx;                                                            
    }
    deleteItem = (id) => {
        
    }
    const totalBill = () => {
        let amt = 0.0;
        cart.forEach(i => {
            amt += (i.quantity * i.price)
        })
        return amt;
    }
    const count = () => cart.length;
    return {
        addItem: addItem,
        getAll: getAll,
        totalBill: totalBill,
        count: count
    }
})()