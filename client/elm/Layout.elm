module Layout exposing (..)

import Html exposing (Html, div)
import Html.Attributes exposing (class, id)
import Html.Events exposing (on)
import App.Model exposing (Model, Msg(CloseBox, RootClick), Box(About, Things))
import Box.About.View as About
import Box.Things.View as Things
import Json.Decode as Json


view : Model -> Html Msg
view model =
    let
        onClick msg =
            on "click" (Json.map msg (Json.at [ "target", "id" ] Json.string))

        rootClass =
            case model.currentBox of
                Just About ->
                    "root active-box"

                Just Things ->
                    "root active-box"

                _ ->
                    "root"
    in
        div [ class rootClass, id "root", onClick RootClick ]
            [ div [ class "quad top-left" ] [ About.view model ]
            , div [ class "quad top-right" ] [ Things.view model ]
            , div [ class "quad bottom-left" ] []
            , div [ class "quad bottom-right" ] []
            ]
