interface StarRatingProps {
  rating: number
  onChange?: (rating: number) => void
}

export function StarRating({ rating, onChange }: StarRatingProps) {
  const stars = [1, 2, 3, 4, 5]

  const handleStarClick = (selectedRating: number) => {
    if (onChange) {
      onChange(selectedRating)
    }
  }

  return (
    <div className="flex flex-row-reverse gap-1">
      {stars.map((star) => (
        <svg
          key={star}
          onClick={() => handleStarClick(star)}
          width="16"
          height="16"
          style={{
            cursor: onChange ? 'pointer' : 'default',
            fill: star <= rating ? '#FBBF24' : 'none',
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m9.298 1.632 1.32 2.64c.18.368.66.72 1.065.788l2.392.397c1.53.255 1.89 1.365.788 2.46l-1.86 1.86c-.315.316-.488.923-.39 1.358l.532 2.303c.42 1.822-.547 2.527-2.16 1.574l-2.242-1.327c-.405-.24-1.073-.24-1.485 0l-2.243 1.327c-1.605.953-2.58.24-2.16-1.575l.533-2.302c.097-.435-.075-1.043-.39-1.358l-1.86-1.86c-1.095-1.095-.743-2.205.787-2.46l2.393-.397c.397-.068.877-.42 1.057-.788l1.32-2.64C7.415.2 8.585.2 9.298 1.632Z"
            stroke="#FBBF24"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}
