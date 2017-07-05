module Layout exposing (..)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import App.Model exposing (Model, Msg, Box(About, Things))


view : Model -> Html Msg
view model =
    let
        rootClass =
            case model.currentBox of
                Just About ->
                    "root active-box"

                Just Things ->
                    "root active-box"

                _ ->
                    "root"
    in
        div [ class rootClass ] [ Html.text <| toString model.siteHue ]
