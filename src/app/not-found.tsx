import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404",
}

const messages = [
  "How did you get here, kid?",
  "You shouldn't be here.",
  "You took a wrong turn.",
  "Did なるちゃん put the wrong link again?",
  "You came at the wrong time.",
  "This is an accident.",
  "The page was eaten by なるちゃん.",
  "This is not the page you're looking for.",
  "Looks like you've hit a dead end.",
  "Houston, we have a problem.",
  "It's not a bug, it's a feature.",
  "The page you are looking for is currently unavailable. Please try again later.",
  "You seem to be lost in the matrix.",
  "The page ran away.",
  "The page you are looking for has been moved, deleted, or never existed.",
  "You shall not here!",
  "You should run...",
  "Where is eyery error hiding?",
  "Welcome to error world!",
  "Face your error!",
  "Pull them to their error!",
]

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}

export default function NotFound() {
  return (
    <div className="flex h-full items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          404 - Not Found
        </h1>
        <h2 className="mb-4 mt-4 text-xl md:text-2xl lg:text-3xl">
          {getRandomMessage()}
        </h2>
        <Button asChild>
          <Link href="/">Send me back home</Link>
        </Button>
      </div>
    </div>
  )
}
