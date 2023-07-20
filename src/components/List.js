import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1947}/>
                <Item marca="Mercedes" ano_lancamento={1926}/>
                <Item marca="BMW" ano_lancamento={1916}/>
                <Item marca="Lamborghini" ano_lancamento={1964}/>
            </ul>
        </>
    )
}

export default List