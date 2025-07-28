import React from 'react'
import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = ({recipeContent}) => {
  return (
    <section className='suggested-recipe-container'>
      <ReactMarkdown>
        {recipeContent}
      </ReactMarkdown>
    </section>
  )
}

export default ClaudeRecipe
