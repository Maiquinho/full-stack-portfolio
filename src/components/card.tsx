interface CardProps {
  title: string
  content: string
  variant: 'active' | 'inactive'
  // url?: string
}

export function Card({ title, content, variant }: CardProps) {
  return (
    <>
      {variant === 'active' && (
        <section className="w-full border-b-4 border-brand bg-gray-600 px-8 py-10 font-mono lg:w-[30%]">
          <h2 className="mb-2 text-2xl text-gray-100 lg:mb-5 lg:text-2lg">
            {title}
          </h2>
          <p className="text-lg text-gray-100">{content}</p>
        </section>
      )}
      {variant === 'inactive' && (
        <section className="w-full border-b-4 border-gray-900 bg-gray-900 px-8 py-10 font-mono transition-all hover:border-brand hover:bg-gray-600 lg:w-[30%]">
          <h2 className="mb-2 text-2xl text-gray-100 lg:mb-5 lg:text-2lg">
            {title}
          </h2>
          <p className="text-lg text-gray-100">{content}</p>
        </section>
      )}
    </>
  )
}
