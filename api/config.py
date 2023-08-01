from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    artifacts_dir: str
    features_transform_name: str
    target_transform_name: str
    predictor_name: str

    model_config = SettingsConfigDict(env_file=".env")
