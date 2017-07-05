module Main exposing (..)

import Html exposing (Html)
import App.Model exposing (Model, Msg(..), initialModel)
import App.Update exposing (update)
import Layout exposing (view)


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }


init : ( Model, Cmd Msg )
init =
    update NewHue initialModel
