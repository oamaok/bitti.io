module App.Model exposing (..)


type Box
    = About
    | Things
    | AudioPlayer


type alias Model =
    { currentBox : Maybe Box
    , siteHue : Int
    }


type Msg
    = OpenBox Box
    | CloseBox
    | RootClick String
    | NewHue
    | SetHue Int


initialModel : Model
initialModel =
    { currentBox = Nothing
    , siteHue = 0
    }
