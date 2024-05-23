{
  description = "TypeScript library dev, Deno/Node workflow";

  nixConfig.bash-prompt = "[ts-deno-node]> ";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages."${system}";
        inherit (pkgs) mkShell;
      in
      {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            deno
            nodejs-slim_20
            esbuild
            nixfmt-rfc-style
            # For openapi-generator
            # If more dependencies are needed, investigate whether to load https://github.com/OpenAPITools/openapi-generator/blob/master/flake.nix
            jdk11
          ];
        };
      }
    )
    // {
      overlays = {
        default = final: prev: { };
      };
    };
}
