{
  description = "TypeScript library dev, Deno/Node workflow";

  nixConfig.bash-prompt = "[ts-deno-node]> ";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/release-23.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages."${system}";
      inherit (pkgs) mkShell;
    in {
      devShell = pkgs.mkShell {
        buildInputs = with pkgs; [ deno nodejs-slim_20 esbuild nixfmt ];
      };
    }) // {
    overlays = {
      default = final: prev: { };
    };
  };
}