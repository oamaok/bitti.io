module Layout exposing (..)

import App.Model exposing (Box(About, Things), Model, Msg(CloseBox, RootClick))
import Box.About.View as About
import Box.Things.View as Things
import Html exposing (Html, div, h1, text)
import Html.Attributes exposing (class, style)
import Html.Events exposing (on)
import Json.Decode as Json
import Utils exposing (Lightness(Dark), colorFromHue)


view : Model -> Html Msg
view model =
    let
        onClick =
            on "click" <|
                Json.map RootClick <|
                    Json.at [ "target", "className" ] Json.string

        rootClass =
            case model.currentBox of
                Just About ->
                    "root active-box"

                Just Things ->
                    "root active-box"

                _ ->
                    "root"
    in
    div [ class rootClass, onClick ]
        [ h1 [ style [ ( "color", colorFromHue Dark model.siteHue ) ] ] [ text "bitti.io" ]
        , div [ class "quad top-left" ] [ About.view model ]
        , div [ class "quad top-right" ] [ Things.view model ]
        , div [ class "quad bottom-left" ] []
        , div [ class "quad bottom-right" ] []
        ]
