const useTree = () => {
    const insert = function (tree, commentId, item) {
        if (tree.id === commentId) {
            tree.items.push({
                id: new Date(),
                // createdAt: new Date().toLocaleString(),
                text: item,
                items: [],
            });
            return tree;
        }
        let latest = [];
        latest = tree.items.map((d) => {
            return insert(d, commentId, item);
        });
        return { ...tree, items: latest };
    };

    const del = (tree, id) => {
        for (let i = 0; i < tree.items.length; i++) {
            const current = tree.items[i];
            if (current.id === id) {
                tree.items.splice(i, 1);
                return tree;
            } else {
                del(current, id);
            }
        }
        return tree;
    };

    return { insert, del };
};

export default useTree;
