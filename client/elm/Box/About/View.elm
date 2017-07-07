module Box.About.View exposing (..)

import Html exposing (Html, div)
import App.Model exposing (Model, Msg(OpenBox), Box(About))
import Box.Wrapper exposing (BoxProperties)
import Utils exposing (colorFromHue, Lightness(..))


view : Model -> Html Msg
view model =
    let
        boxProperties : BoxProperties
        boxProperties =
            { title = "about"
            , bottom = False
            , icon = "\xE88F"
            , color = colorFromHue Dark model.siteHue
            , onClick = OpenBox About
            , active = model.currentBox == Just About
            }

        wrapperClass =
            case model.currentBox of
                Just About ->
                    "box-wrapper active"

                _ ->
                    "box-wrapper"
    in
        Box.Wrapper.view boxProperties
            [ div [] [ Html.text "hello" ]
            ]
