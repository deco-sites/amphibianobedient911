
import { useState } from "preact/hooks";

interface Props {
  blackFriday?: boolean;
  title?: string;
}

export default function Section({ blackFriday, title }: Props) {

  const Theme = !blackFriday ? 'text-black bg-white' : 'text-white bg-black'
  const [modal, setModal] = useState(false);

  return (
    <body className={`h-full ${Theme}`}>
      <h1
        className={`${Theme} text-center py-3`}> {title}
      </h1>

      <button onClick={() => setModal(true)}>
         Abrir modal
      </button>

    </body>
  )
}