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

        OpenBox box ->
            ( { model | currentBox = Just box }, Cmd.none )

        CloseBox ->
            ( { model | currentBox = Nothing }, Cmd.none )

        RootClick asd ->
            let
                debug =
                    Debug.log "string" asd
            in
                ( { model | currentBox = Nothing }, Cmd.none )
