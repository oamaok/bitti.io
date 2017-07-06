module Utils exposing (..)


type Lightness
    = Light
    | Dark


colorFromHue : Lightness -> Int -> String
colorFromHue lightness hue =
    case lightness of
        Light ->
            "hsl(" ++ toString hue ++ ", 26%, 55%)"

        Dark ->
            "hsl(" ++ toString hue ++ ", 26%, 40%)"
