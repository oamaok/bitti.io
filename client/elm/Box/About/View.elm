module Box.About.View exposing (..)

import App.Model exposing (Box(About), Model, Msg(OpenBox))
import Box.Wrapper exposing (BoxProperties)
import Html exposing (Html, a, div, li, p, text, ul)
import Html.Attributes exposing (class, href, rel, target)
import Utils exposing (Lightness(..), colorFromHue)


view : Model -> Html Msg
view { siteHue, currentBox } =
    let
        boxProperties : BoxProperties
        boxProperties =
            { title = "about"
            , bottom = False
            , icon = "\xE88F"
            , color = colorFromHue Dark siteHue
            , onClick = OpenBox About
            , active = currentBox == Just About
            }

        para str =
            p [] [ text str ]

        link to str =
            li []
                [ a [ href to, target "_blank", rel "noopener noreferrer" ] [ text str ]
                ]

        wrapperClass =
            case currentBox of
                Just About ->
                    "box-wrapper active"

                _ ->
                    "box-wrapper"
    in
    Box.Wrapper.view boxProperties
        [ div [ class "content" ]
            [ para "hello"
            , para "my name is teemu. i'm a software developer from finland."
            , para "this is my personal website. i put stuff here, sometimes."
            , ul []
                [ link "https://github.com/oamaok" "github"
                , link "https://twitter.com/oamaok" "twitter"
                , link "https://steamcommunity.com/id/oamaok" "steam"
                , link "mailto:oamaok@gmail.com" "email"
                ]
            ]
        ]
