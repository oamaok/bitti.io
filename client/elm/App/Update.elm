module App.Update exposing (..)

import App.Model exposing (Model, Msg(..))
import Random


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NewHue ->
            ( model, Random.generate SetHue (Random.int 0 360) )

        SetHue hue ->
            ( { model | siteHue = hue }, Cmd.none )

        _ ->
            ( model, Cmd.none )
