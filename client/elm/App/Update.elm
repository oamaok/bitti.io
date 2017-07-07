module App.Update exposing (..)

import App.Model exposing (Model, Msg(..))
import Maybe exposing (withDefault)
import Random
import String exposing (split)


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

        RootClick targetClass ->
            let
                firstClass =
                    withDefault "" <| List.head <| split " " targetClass
            in
            case firstClass of
                "quad" ->
                    ( { model | currentBox = Nothing }, Cmd.none )

                _ ->
                    ( model, Cmd.none )
