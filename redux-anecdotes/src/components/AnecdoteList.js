import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.AnecdoteReducer)
    const dispatch = useDispatch()

    const voteAnecdote = (id) => {
        return {
          type: 'vote',
          anecdoteId: id
        }
      }

    const vote = (id) => {
        dispatch(voteAnecdote(id))
    }

    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList