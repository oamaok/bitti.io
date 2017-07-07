module Box.Things.View exposing (..)

import App.Model exposing (Box(Things), Model, Msg(OpenBox))
import Box.Wrapper exposing (BoxProperties)
import Html exposing (Html, a, div, li, p, text, ul)
import Html.Attributes exposing (class, href, rel, target)
import Utils exposing (Lightness(Light), colorFromHue)


view : Model -> Html Msg
view { siteHue, currentBox } =
    let
        boxProperties : BoxProperties
        boxProperties =
            { title = "things"
            , bottom = False
            , icon = "\xE1BD"
            , color = colorFromHue Light siteHue
            , onClick = OpenBox Things
            , active = currentBox == Just Things
            }

        link to str =
            a [ href to, target "_blank", rel "noopener noreferrer" ] [ text str ]

        wrapperClass =
            case currentBox of
                Just Things ->
                    "box-wrapper active"

                _ ->
                    "box-wrapper"
    in
    Box.Wrapper.view boxProperties
        [ div [ class "content" ]
            [ p []
                [ link "https://osu.bitti.io" "oppai-web"
                , text " — online osu! pp calculator"
                ]
            , p []
                [ link "https://chrome.google.com/webstore/detail/ezpp/aimihpobjpagjiakhcpijibnaafdniol" "ezpp!"
                , text " — browser extension for calculating osu! pp"
                ]
            ]
        ]
