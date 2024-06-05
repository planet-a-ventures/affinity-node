{
  description = "TypeScript library dev, Deno/Node workflow";

  nixConfig.bash-prompt = "[ts-deno-node]> ";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs";
    pre-commit-hooks-nix.url = "github:cachix/pre-commit-hooks.nix";
    pre-commit-hooks-nix.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs@{ self, flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ inputs.pre-commit-hooks-nix.flakeModule ];
      systems =
        [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      perSystem = { config, self', inputs', pkgs, ... }: {
        # Per-system attributes can be defined here. The self' and inputs'
        # module parameters provide easy access to attributes of the same
        # system.

        # Equivalent to  inputs'.nixpkgs.legacyPackages.hello;
        # packages.hello = pkgs.hello;
        # Via https://github.com/cachix/git-hooks.nix
        pre-commit.settings.hooks.nixpkgs-fmt.enable = true;
        pre-commit.settings.hooks.commitizen.enable = true;
        pre-commit.settings.hooks.denofmt.enable = true;
        pre-commit.settings.hooks.denolint.enable = true;
        pre-commit.settings.hooks.typos.enable = true;
        pre-commit.settings.hooks.yamllint.enable = true;

        # NOTE: You can also use `config.pre-commit.devShell`
        devShells.default = pkgs.mkShell {
          shellHook = ''
            ${config.pre-commit.installationScript}
            echo 1>&2 "Welcome to the development shell!"
          '';
          buildInputs = with pkgs; [
            commitizen
            deno
            nixpkgs-fmt
            # can't use slim here as long as we still publish with npm.
            # TODO(@joscha) change this once we only publish to jsr
            nodejs_20
            esbuild
            # For openapi-generator
            # If more dependencies are needed, investigate whether to load https://github.com/OpenAPITools/openapi-generator/blob/master/flake.nix
            jdk11
            yamllint
            yamlfmt
          ];
        };
      };
      flake = {
        # The usual flake attributes can be defined here, including system-
        # agnostic ones like nixosModule and system-enumerating ones, although
        # those are more easily expressed in perSystem.

      };
    };
}
