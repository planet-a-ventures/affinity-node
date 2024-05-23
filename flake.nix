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
