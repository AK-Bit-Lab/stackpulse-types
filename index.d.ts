/**
 * StackPulse Types - TypeScript type definitions
 * @module stackpulse-types
 */
export declare const VERSION: string;
export type NetworkType = 'mainnet' | 'testnet' | 'devnet';
export interface StacksAddress { address: string; network: NetworkType; isValid: boolean; }
export interface PulseConfig { contractAddress: string; contractName: string; network: NetworkType; }
