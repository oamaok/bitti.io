module Box.Wrapper exposing (..)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class, style)
import Html.Events exposing (onClick)
import App.Model exposing (Model, Msg)


type alias BoxProperties =
    { title : String
    , bottom : Bool
    , icon : String
    , color : String
    , onClick : Msg
    , active : Bool
    }


view : BoxProperties -> List (Html Msg) -> Html Msg
view props content =
    let
        title =
            div
                [ class "title"
                , style [ ( "color", props.color ) ]
                ]
                [ text props.title ]

        contents =
            div
                [ class "box"
                , style [ ( "background-color", props.color ) ]
                ]
                [ div [ class "icon" ] [ text props.icon ]
                , div [ class "content-wrapper" ] content
                ]

        wrapperClass =
            if props.active then
                "box-wrapper active"
            else
                "box-wrapper"
    in
        if props.bottom then
            div [ class wrapperClass, onClick props.onClick ] [ contents, title ]
        else
            div [ class wrapperClass, onClick props.onClick ] [ title, contents ]
