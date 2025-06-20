import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Review as ReviewType } from "@/types/review"
import { Star } from "lucide-react"



export default function Review({ name, book_title, rating, review, mood, created_at }: ReviewType) {

  const formattedDate = new Intl.DateTimeFormat("en-CA").format(new Date(created_at));
  return (
    <Card className="w-full max-w-xl mx-auto shadow-blue-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{book_title}</p>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Number(rating) ? "text-blue-400 fill-blue-400" : "text-gray-300"}
            />
          ))}
        </div>

        <p className="text-sm text-gray-800">{review}</p>

        <div className="text-xs font-light">Mood: {mood}</div>
        <div className="text-xs text-muted-foreground w-full text-end">
          {formattedDate}
        </div>
      </CardContent>
    </Card>
  )
}
