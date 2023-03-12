import { connect } from "react-redux"
import Card from "../card/Card"

function Favorites({ myFavorites }) {

    return (
        <div>
            {myFavorites.map((character) => <div>
                <Card
                    key={character.id}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    id={character.id}
                />
            </div>)}
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)