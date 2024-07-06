export type GitHubProviderSettings = {
    clientId: string;
    clientSecret: string;
    redirectUri: string;
    scopes: GitHubScopes[] | string[];
    login?: string;
    allowSignup?: boolean;
}

export type GitHubProfile = {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
}

export type GitHubEmail = {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: string;
}

export enum GitHubScopes {

    /** Grants full access to public and private repositories including read and write access to code, commit statuses, repository invitations, collaborators, deployment statuses, and repository webhooks. Note: In addition to repository related resources, the repo scope also grants access to manage organization-owned resources including projects, invitations, team memberships and webhooks. This scope also grants the ability to manage projects owned by users. */
    Repo = 'repo',

    /** Grants read/write access to commit statuses in public and private repositories. This scope is only necessary to grant other users or services access to private repository commit statuses without granting access to the code. */
    RepoStatus = 'repo:status',

    /** Grants access to deployment statuses for public and private repositories. This scope is only necessary to grant other users or services access to deployment statuses, without granting access to the code. */
    RepoDeployment = 'repo_deployment',

    /** Limits access to public repositories. That includes read/write access to code, commit statuses, repository projects, collaborators, and deployment statuses for public repositories and organizations. Also required for starring public repositories. */
    PublicRepo = 'public_repo',

    /** Grants accept/decline abilities for invitations to collaborate on a repository. This scope is only necessary to grant other users or services access to invites without granting access to the code. */
    RepoInvite = 'repo:invite',

    /** Grants: read and write access to security events in the code scanning API
     * This scope is only necessary to grant other users or services access to security events without granting access to the code. */
    SecurityEvents = 'security_events',

    /** Grants read, write, ping, and delete access to repository hooks in public or private repositories. The repo and public_repo scopes grant full access to repositories, including repository hooks. Use the admin:repo_hook scope to limit access to only repository hooks. */
    RepoHook = 'admin:repo_hook',

    /** Grants read, write, and ping access to hooks in public or private repositories. */
    WriteRepoHook = 'write:repo_hook',

    /** Grants read and ping access to hooks in public or private repositories. */
    ReadRepoHook = 'read:repo_hook',
    
    /** Fully manage the organization and its teams, projects, and memberships. */
    Org = 'admin:org',

    /** Read and write access to organization membership and organization projects. */
    OrgWrite = 'write:org',

    /** Read-only access to organization membership, organization projects, and team memberships. */
    OrgRead = 'read:org',

    /** Fully manage public keys. */
    PublicKey = 'admin:public_key',

    /** Create, list, and view details for public keys. */
    WritePublicKey = 'write:public_key',

    /** List and view details for public keys. */
    ReadPublicKey = 'read:public_key',

    /** Grants read, write, ping, and delete access to organization hooks. Note: OAuth tokens will only be able to perform these actions on organization hooks which were created by the OAuth app. Personal access tokens will only be able to perform these actions on organization hooks created by a user. */
    OrgHook = 'admin:org_hook',

    /** Grants write access to gists. */
    Gist = 'gist',

    /** Grants read access to a user's notifications mark as read access to threads watch and unwatch access to a repository, and read, write, and delete access to thread subscriptions. */
    Notifications = 'notifications',

    /** Grants read/write access to profile info only. Note that this scope includes user:email and user:follow. */
    User = 'user',

    /** Grants access to read a user's profile data. */
    ReadUser = 'read:user',

    /** Grants read access to a user's email addresses. */
    UserEmail = 'user:email',

    /** Grants access to follow or unfollow other users. */
    UserFollow = 'user:follow',

    /** Grants read/write access to user and organization projects. */
    Project = 'project',

    /** Grants read only access to user and organization projects. */
    ReadProject = 'read:project',

    /** Grants access to delete adminable repositories. */
    DeleteRepo = 'delete_repo',

    /** Grants access to upload or publish a package in GitHub Packages. */
    WritePackages = 'write:packages',

    /** Grants access to download or install packages from GitHub Packages. */
    ReadPackages = 'read:packages',

    /** Grants access to delete packages from GitHub Packages. */
    DeletePackages = 'delete:packages',

    /** Fully manage GPG keys. */
    GpgKey = 'admin:gpg_key',

    /** Create, list, and view details for GPG keys. */
    WriteGpgKey = 'write:gpg_key',

    /** List and view details for GPG keys. */
    ReadGpgKey = 'read:gpg_key',

    /** Grants the ability to create and manage codespaces. Codespaces can expose a GITHUB_TOKEN which may have a different set of scopes. */
    Codespace = 'codespace',

    /** Grants the ability to add and update GitHub Actions workflow files. Workflow files can be committed without this scope if the same file (with both the same path and contents) exists on another branch in the same repository. Workflow files can expose GITHUB_TOKEN which may have a different set of scopes. */
    Workflow = 'workflow',
}