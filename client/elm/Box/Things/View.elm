module Box.Things.View exposing (..)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import App.Model exposing (Model, Msg, Box(About))


view : Model -> Html Msg
view model =
    let
        wrapperClass =
            case model.currentBox of
                Just About ->
                    "box-wrapper active"

                _ ->
                    "box-wrapper"
    in
        div [ class wrapperClass ] [ Html.text "hello" ]
