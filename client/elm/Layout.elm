module Layout exposing (..)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import App.Model exposing (Model, Msg, Box(About, Things))
import Box.About.View as About
import Box.Things.View as Things


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
        div [ class rootClass ]
            [ div [ class "quad top-left" ] [ About.view model ]
            , div [ class "quad top-right" ] [ Things.view model ]
            , div [ class "quad bottom-left" ] []
            , div [ class "quad bottom-right" ] []
            ]
