import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
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

    anecdotes.sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {anecdotes.map(anecdote =>
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