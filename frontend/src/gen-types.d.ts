/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Action =
  | (
      | "CancelResetGame"
      | "ResetGame"
      | "StartGame"
      | "DrawCard"
      | "RevealCard"
      | "PickUpKitty"
      | "PutDownKitty"
      | "BeginPlay"
      | "EndTrick"
      | "TakeBackCards"
      | "TakeBackBid"
      | "EndGameEarly"
      | "StartNewGame"
      | "Beep"
    )
  | {
      MakeObserver: number;
    }
  | {
      MakePlayer: number;
    }
  | {
      SetChatLink: string | null;
    }
  | {
      SetNumDecks: number | null;
    }
  | {
      SetSpecialDecks: Deck[];
    }
  | {
      SetKittySize: number | null;
    }
  | {
      SetFriendSelectionPolicy: FriendSelectionPolicy;
    }
  | {
      SetMultipleJoinPolicy: MultipleJoinPolicy;
    }
  | {
      SetFirstLandlordSelectionPolicy: FirstLandlordSelectionPolicy;
    }
  | {
      SetBidPolicy: BidPolicy;
    }
  | {
      SetBidReinforcementPolicy: BidReinforcementPolicy;
    }
  | {
      SetJokerBidPolicy: JokerBidPolicy;
    }
  | {
      SetHideLandlordsPoints: boolean;
    }
  | {
      SetHidePlayedCards: boolean;
    }
  | {
      ReorderPlayers: number[];
    }
  | {
      SetRank: MaxRank;
    }
  | {
      SetMetaRank: number;
    }
  | {
      SetMaxRank: MaxRank;
    }
  | {
      SetLandlord: number | null;
    }
  | {
      SetLandlordEmoji: string | null;
    }
  | {
      SetGameMode: GameModeSettings;
    }
  | {
      SetAdvancementPolicy: AdvancementPolicy;
    }
  | {
      SetGameScoringParameters: GameScoringParameters;
    }
  | {
      SetKittyPenalty: KittyPenalty;
    }
  | {
      SetKittyBidPolicy: KittyBidPolicy;
    }
  | {
      SetTrickDrawPolicy: TrickDrawPolicy;
    }
  | {
      SetThrowPenalty: ThrowPenalty;
    }
  | {
      SetThrowEvaluationPolicy: ThrowEvaluationPolicy;
    }
  | {
      SetPlayTakebackPolicy: PlayTakebackPolicy;
    }
  | {
      SetBidTakebackPolicy: BidTakebackPolicy;
    }
  | {
      SetKittyTheftPolicy: KittyTheftPolicy;
    }
  | {
      SetGameShadowingPolicy: GameShadowingPolicy;
    }
  | {
      SetGameStartPolicy: GameStartPolicy;
    }
  | {
      SetShouldRevealKittyAtEndOfGame: boolean;
    }
  | {
      SetHideThrowHaltingPlayer: boolean;
    }
  | {
      SetJackVariation: BackToTwoSetting;
    }
  | {
      SetTractorRequirements: TractorRequirements;
    }
  | {
      SetGameVisibility: GameVisibility;
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      Bid: [Card, number];
    }
  | {
      MoveCardToKitty: Card;
    }
  | {
      MoveCardToHand: Card;
    }
  | {
      SetFriends: FriendSelection[];
    }
  | {
      PlayCards: Card[];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      PlayCardsWithHint: [Card[], TrickUnit[]];
    };
export type Number = string;
export type FriendSelectionPolicy =
  | "Unrestricted"
  | "TrumpsIncluded"
  | "HighestCardNotAllowed"
  | "PointCardNotAllowed";
export type MultipleJoinPolicy = "Unrestricted" | "NoDoubleJoin";
export type FirstLandlordSelectionPolicy = "ByWinningBid" | "ByFirstBid";
export type BidPolicy =
  | "JokerOrHigherSuit"
  | "JokerOrGreaterLength"
  | "GreaterLength";
export type BidReinforcementPolicy =
  | "ReinforceWhileWinning"
  | "OverturnOrReinforceWhileWinning"
  | "ReinforceWhileEquivalent";
export type JokerBidPolicy =
  | "BothTwoOrMore"
  | "BothNumDecks"
  | "LJNumDecksHJNumDecksLessOne"
  | "Disabled";
export type MaxRank = string;
export type GameModeSettings =
  | "Tractor"
  | {
      FindingFriends: {
        num_friends?: number | null;
        [k: string]: unknown;
      };
    };
export type AdvancementPolicy =
  | "Unrestricted"
  | "FullyUnrestricted"
  | "DefendPoints";
export type BonusLevelPolicy =
  | "NoBonusLevel"
  | "BonusLevelForSmallerLandlordTeam";
export type KittyPenalty = "Times" | "Power";
export type KittyBidPolicy = "FirstCard" | "FirstCardOfLevelOrHighest";
export type TrickDrawPolicy =
  | ("NoProtections" | "NoFormatBasedDraw")
  | "LongerTuplesProtected"
  | "OnlyDrawTractorOnTractor"
  | "LongerTuplesProtectedAndOnlyDrawTractorOnTractor";
export type ThrowPenalty = "None" | "TenPointsPerAttempt";
export type ThrowEvaluationPolicy = "All" | "Highest" | "TrickUnitLength";
export type PlayTakebackPolicy = "AllowPlayTakeback" | "NoPlayTakeback";
export type BidTakebackPolicy = "AllowBidTakeback" | "NoBidTakeback";
export type KittyTheftPolicy = "AllowKittyTheft" | "NoKittyTheft";
export type GameShadowingPolicy = "AllowMultipleSessions" | "SingleSessionOnly";
export type GameStartPolicy = "AllowAnyPlayer" | "AllowLandlordOnly";
export type BackToTwoSetting = "Disabled" | "SingleJack";
export type GameVisibility = "Public" | "Unlisted";
export type Card = string;
export type TrickUnit =
  | {
      Tractor: {
        count: number;
        members: OrderedCard[];
        [k: string]: unknown;
      };
    }
  | {
      Repeated: {
        card: OrderedCard;
        count: number;
        [k: string]: unknown;
      };
    };
export type Trump =
  | {
      Standard: {
        number: Number;
        suit: Suit;
        [k: string]: unknown;
      };
    }
  | {
      NoTrump: {
        number?: Number | null;
        [k: string]: unknown;
      };
    };
export type Suit = string;
export type EffectiveSuit =
  | "Unknown"
  | "Clubs"
  | "Diamonds"
  | "Spades"
  | "Hearts"
  | "Trump";
export type GameMessage =
  | {
      State: {
        state: GameState;
        [k: string]: unknown;
      };
    }
  | {
      Message: {
        from: string;
        message: string;
        [k: string]: unknown;
      };
    }
  | {
      Broadcast: {
        data: BroadcastMessage;
        message: string;
        [k: string]: unknown;
      };
    }
  | {
      Beep: {
        target: string;
        [k: string]: unknown;
      };
    }
  | {
      ReadyCheck: {
        from: string;
        [k: string]: unknown;
      };
    }
  | {
      Error: string;
    }
  | {
      Header: {
        messages: string[];
        [k: string]: unknown;
      };
    }
  | {
      Kicked: {
        target: string;
        [k: string]: unknown;
      };
    };
export type GameState =
  | {
      Initialize: InitializePhase;
    }
  | {
      Draw: DrawPhase;
    }
  | {
      Exchange: ExchangePhase;
    }
  | {
      Play: PlayPhase;
    };
export type GameMode =
  | "Tractor"
  | {
      FindingFriends: {
        friends: Friend[];
        num_friends: number;
        [k: string]: unknown;
      };
    };
export type MessageVariant =
  | {
      type: "ResetRequested";
      [k: string]: unknown;
    }
  | {
      type: "ResetCanceled";
      [k: string]: unknown;
    }
  | {
      type: "ResettingGame";
      [k: string]: unknown;
    }
  | {
      type: "StartingGame";
      [k: string]: unknown;
    }
  | {
      points: number;
      type: "TrickWon";
      winner: number;
      [k: string]: unknown;
    }
  | {
      new_rank: MaxRank;
      player: number;
      type: "RankAdvanced";
      [k: string]: unknown;
    }
  | {
      player: number;
      rank: MaxRank;
      type: "AdvancementBlocked";
      [k: string]: unknown;
    }
  | {
      landlord: number;
      type: "NewLandlordForNextGame";
      [k: string]: unknown;
    }
  | {
      multiplier: number;
      points: number;
      type: "PointsInKitty";
      [k: string]: unknown;
    }
  | {
      cards: Card[];
      type: "EndOfGameKittyReveal";
      [k: string]: unknown;
    }
  | {
      player: number;
      type: "JoinedGame";
      [k: string]: unknown;
    }
  | {
      game_shadowing_policy: GameShadowingPolicy;
      player: number;
      type: "JoinedGameAgain";
      [k: string]: unknown;
    }
  | {
      already_joined: boolean;
      player: number;
      type: "JoinedTeam";
      [k: string]: unknown;
    }
  | {
      name: string;
      type: "LeftGame";
      [k: string]: unknown;
    }
  | {
      policy: AdvancementPolicy;
      type: "AdvancementPolicySet";
      [k: string]: unknown;
    }
  | {
      size?: number | null;
      type: "KittySizeSet";
      [k: string]: unknown;
    }
  | {
      policy: FriendSelectionPolicy;
      type: "FriendSelectionPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: MultipleJoinPolicy;
      type: "MultipleJoinPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: FirstLandlordSelectionPolicy;
      type: "FirstLandlordSelectionPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: BidPolicy;
      type: "BidPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: BidReinforcementPolicy;
      type: "BidReinforcementPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: JokerBidPolicy;
      type: "JokerBidPolicySet";
      [k: string]: unknown;
    }
  | {
      should_reveal: boolean;
      type: "ShouldRevealKittyAtEndOfGameSet";
      [k: string]: unknown;
    }
  | {
      special_decks: Deck[];
      type: "SpecialDecksSet";
      [k: string]: unknown;
    }
  | {
      num_decks?: number | null;
      type: "NumDecksSet";
      [k: string]: unknown;
    }
  | {
      num_friends?: number | null;
      type: "NumFriendsSet";
      [k: string]: unknown;
    }
  | {
      game_mode: GameModeSettings;
      type: "GameModeSet";
      [k: string]: unknown;
    }
  | {
      policy: KittyTheftPolicy;
      type: "KittyTheftPolicySet";
      [k: string]: unknown;
    }
  | {
      type: "GameVisibilitySet";
      visibility: GameVisibility;
      [k: string]: unknown;
    }
  | {
      type: "TookBackPlay";
      [k: string]: unknown;
    }
  | {
      type: "TookBackBid";
      [k: string]: unknown;
    }
  | {
      cards: Card[];
      type: "PlayedCards";
      [k: string]: unknown;
    }
  | {
      better_player?: number | null;
      original_cards: Card[];
      type: "ThrowFailed";
      [k: string]: unknown;
    }
  | {
      type: "SetDefendingPointVisibility";
      visible: boolean;
      [k: string]: unknown;
    }
  | {
      type: "SetCardVisibility";
      visible: boolean;
      [k: string]: unknown;
    }
  | {
      landlord?: number | null;
      type: "SetLandlord";
      [k: string]: unknown;
    }
  | {
      emoji: string;
      type: "SetLandlordEmoji";
      [k: string]: unknown;
    }
  | {
      rank: MaxRank;
      type: "SetRank";
      [k: string]: unknown;
    }
  | {
      metarank: number;
      type: "SetMetaRank";
      [k: string]: unknown;
    }
  | {
      rank: MaxRank;
      type: "SetMaxRank";
      [k: string]: unknown;
    }
  | {
      card: Card;
      count: number;
      type: "MadeBid";
      [k: string]: unknown;
    }
  | {
      kitty_penalty: KittyPenalty;
      type: "KittyPenaltySet";
      [k: string]: unknown;
    }
  | {
      throw_penalty: ThrowPenalty;
      type: "ThrowPenaltySet";
      [k: string]: unknown;
    }
  | {
      policy: KittyBidPolicy;
      type: "KittyBidPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: TrickDrawPolicy;
      type: "TrickDrawPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: ThrowEvaluationPolicy;
      type: "ThrowEvaluationPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: PlayTakebackPolicy;
      type: "PlayTakebackPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: BidTakebackPolicy;
      type: "BidTakebackPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: GameShadowingPolicy;
      type: "GameShadowingPolicySet";
      [k: string]: unknown;
    }
  | {
      policy: GameStartPolicy;
      type: "GameStartPolicySet";
      [k: string]: unknown;
    }
  | {
      old_parameters: GameScoringParameters;
      parameters: GameScoringParameters;
      type: "GameScoringParametersChanged";
      [k: string]: unknown;
    }
  | {
      type: "PickedUpCards";
      [k: string]: unknown;
    }
  | {
      type: "PutDownCards";
      [k: string]: unknown;
    }
  | {
      type: "RevealedCardFromKitty";
      [k: string]: unknown;
    }
  | {
      type: "GameEndedEarly";
      [k: string]: unknown;
    }
  | {
      result: {
        [k: string]: PlayerGameFinishedResult;
      };
      type: "GameFinished";
      [k: string]: unknown;
    }
  | {
      type: "BonusLevelEarned";
      [k: string]: unknown;
    }
  | {
      landlord_won: boolean;
      non_landlords_points: number;
      type: "EndOfGameSummary";
      [k: string]: unknown;
    }
  | {
      set: boolean;
      type: "HideThrowHaltingPlayer";
      [k: string]: unknown;
    }
  | {
      type: "JackVariation";
      variation: BackToTwoSetting;
      [k: string]: unknown;
    }
  | {
      tractor_requirements: TractorRequirements;
      type: "TractorRequirementsChanged";
      [k: string]: unknown;
    };

export interface _Combined {
  action: Action;
  can_play_cards_request: CanPlayCardsRequest;
  can_play_cards_response: CanPlayCardsResponse;
  card_info: CardInfo;
  card_info_request: CardInfoRequest;
  compute_score_request: ComputeScoreRequest;
  compute_score_response: ComputeScoreResponse;
  decompose_trick_format_request: DecomposeTrickFormatRequest;
  decompose_trick_format_response: DecomposeTrickFormatResponse;
  decomposed_trick_format: DecomposedTrickFormat;
  explain_scoring_request: ExplainScoringRequest;
  explain_scoring_response: ExplainScoringResponse;
  find_valid_bids_request: FindValidBidsRequest;
  find_valid_bids_response: FindValidBidsResult;
  find_viable_plays_request: FindViablePlaysRequest;
  find_viable_plays_response: FindViablePlaysResult;
  found_viable_play: FoundViablePlay;
  game_message: GameMessage;
  next_threshold_reachable_request: NextThresholdReachableRequest;
  score_segment: ScoreSegment;
  sort_and_group_cards_request: SortAndGroupCardsRequest;
  sort_and_group_cards_response: SortAndGroupCardsResponse;
  suit_group: SuitGroup;
  [k: string]: unknown;
}
export interface Deck {
  exclude_big_joker: boolean;
  exclude_small_joker: boolean;
  min: Number;
  [k: string]: unknown;
}
export interface GameScoringParameters {
  bonus_level_policy: BonusLevelPolicy;
  /**
   * Number of steps (as a fraction of the overall number in the deck) that control is turned over, but neither side goes up a level.
   */
  deadzone_size: number;
  /**
   * Number of steps (as a fraction of the overall number in the deck) necessary to give the attacking team landlord.
   */
  num_steps_to_non_landlord_turnover: number;
  /**
   * Number-of-deck-based adjustments to the step size
   */
  step_adjustments: {
    [k: string]: number;
  };
  /**
   * Number of points per "step" in the deck.
   */
  step_size_per_deck: number;
  truncate_zero_crossing_window: boolean;
  [k: string]: unknown;
}
export interface TractorRequirements {
  /**
   * The minimum number of cards in each unit of the tractor
   */
  min_count: number;
  /**
   * The minimum length of the tractor
   */
  min_length: number;
  [k: string]: unknown;
}
export interface FriendSelection {
  card: Card;
  initial_skip: number;
  [k: string]: unknown;
}
/**
 * A wrapper around a card with a given trump, which provides ordering characteristics.
 */
export interface OrderedCard {
  card: Card;
  trump: Trump;
  [k: string]: unknown;
}
export interface CanPlayCardsRequest {
  cards: Card[];
  hands: Hands;
  id: number;
  trick: Trick;
  trick_draw_policy: TrickDrawPolicy;
  [k: string]: unknown;
}
export interface Hands {
  hands: {
    [k: string]: {
      [k: string]: number;
    };
  };
  trump?: Trump | null;
  [k: string]: unknown;
}
export interface Trick {
  current_winner?: number | null;
  /**
   * A parallel array to `played_cards` which contains the units corresponding to played cards that match the `trick_format`, or `None` if they don't match.
   *
   * TODO: remove default deserialization attribute in a few days.
   */
  played_card_mappings?: (TrickUnit[] | null)[];
  played_cards: PlayedCards[];
  player_queue: number[];
  trick_format?: TrickFormat | null;
  trump: Trump;
  [k: string]: unknown;
}
export interface PlayedCards {
  bad_throw_cards: Card[];
  better_player?: number | null;
  cards: Card[];
  id: number;
  [k: string]: unknown;
}
export interface TrickFormat {
  suit: EffectiveSuit;
  trump: Trump;
  units: TrickUnit[];
  [k: string]: unknown;
}
export interface CanPlayCardsResponse {
  playable: boolean;
  [k: string]: unknown;
}
export interface CardInfo {
  display_value: string;
  effective_suit: EffectiveSuit;
  number?: string | null;
  points: number;
  suit?: Suit | null;
  typ: string;
  value: string;
  [k: string]: unknown;
}
export interface CardInfoRequest {
  card: Card;
  trump: Trump;
  [k: string]: unknown;
}
export interface ComputeScoreRequest {
  decks: Deck[];
  non_landlord_points: number;
  params: GameScoringParameters;
  smaller_landlord_team_size: boolean;
  [k: string]: unknown;
}
export interface ComputeScoreResponse {
  next_threshold: number;
  score: GameScoreResult;
  [k: string]: unknown;
}
export interface GameScoreResult {
  landlord_bonus: boolean;
  landlord_delta: number;
  landlord_won: boolean;
  non_landlord_delta: number;
  [k: string]: unknown;
}
export interface DecomposeTrickFormatRequest {
  hands: Hands;
  player_id: number;
  trick_draw_policy: TrickDrawPolicy;
  trick_format: TrickFormat;
  [k: string]: unknown;
}
export interface DecomposeTrickFormatResponse {
  results: DecomposedTrickFormat[];
  [k: string]: unknown;
}
export interface DecomposedTrickFormat {
  description: string;
  format: UnitLike[];
  more_than_one: boolean;
  playable: Card[];
  [k: string]: unknown;
}
export interface UnitLike {
  adjacent_tuples: number[];
  [k: string]: unknown;
}
export interface ExplainScoringRequest {
  decks: Deck[];
  params: GameScoringParameters;
  smaller_landlord_team_size: boolean;
  [k: string]: unknown;
}
export interface ExplainScoringResponse {
  results: ScoreSegment[];
  step_size: number;
  total_points: number;
  [k: string]: unknown;
}
export interface ScoreSegment {
  point_threshold: number;
  results: GameScoreResult;
  [k: string]: unknown;
}
export interface FindValidBidsRequest {
  bid_policy: BidPolicy;
  bid_reinforcement_policy: BidReinforcementPolicy;
  bids: Bid[];
  epoch: number;
  hands: Hands;
  id: number;
  joker_bid_policy: JokerBidPolicy;
  landlord?: number | null;
  num_decks: number;
  players: Player[];
  [k: string]: unknown;
}
export interface Bid {
  card: Card;
  count: number;
  epoch?: number;
  id: number;
  [k: string]: unknown;
}
export interface Player {
  id: number;
  level: MaxRank;
  metalevel: number;
  name: string;
  [k: string]: unknown;
}
export interface FindValidBidsResult {
  results: Bid[];
  [k: string]: unknown;
}
export interface FindViablePlaysRequest {
  cards: Card[];
  tractor_requirements: TractorRequirements;
  trump: Trump;
  [k: string]: unknown;
}
export interface FindViablePlaysResult {
  results: FoundViablePlay[];
  [k: string]: unknown;
}
export interface FoundViablePlay {
  description: string;
  grouping: TrickUnit[];
  [k: string]: unknown;
}
export interface InitializePhase {
  propagated: PropagatedState;
  [k: string]: unknown;
}
export interface PropagatedState {
  advancement_policy?: AdvancementPolicy & string;
  bid_policy?: BidPolicy & string;
  bid_reinforcement_policy?: BidReinforcementPolicy & string;
  bid_takeback_policy?: BidTakebackPolicy & string;
  chat_link?: string | null;
  first_landlord_selection_policy?: FirstLandlordSelectionPolicy & string;
  friend_selection_policy?: FriendSelectionPolicy & string;
  game_mode: GameModeSettings;
  game_scoring_parameters?: GameScoringParameters;
  game_shadowing_policy?: GameShadowingPolicy & string;
  game_start_policy?: GameStartPolicy & string;
  game_visibility?: GameVisibility & string;
  hide_landlord_points?: boolean;
  hide_played_cards?: boolean;
  hide_throw_halting_player?: boolean;
  jack_variation?: BackToTwoSetting & string;
  joker_bid_policy?: JokerBidPolicy & string;
  kitty_bid_policy?: KittyBidPolicy & string;
  kitty_penalty?: KittyPenalty & string;
  kitty_size?: number | null;
  kitty_theft_policy?: KittyTheftPolicy & string;
  landlord?: number | null;
  landlord_emoji?: string | null;
  max_player_id: number;
  max_rank?: MaxRank & string;
  multiple_join_policy?: MultipleJoinPolicy & string;
  num_decks?: number | null;
  num_games_finished?: number;
  observers: Player[];
  play_takeback_policy?: PlayTakebackPolicy & string;
  players: Player[];
  should_reveal_kitty_at_end_of_game?: boolean;
  special_decks?: Deck[];
  throw_evaluation_policy?: ThrowEvaluationPolicy & string;
  throw_penalty?: ThrowPenalty & string;
  tractor_requirements?: TractorRequirements;
  trick_draw_policy?: TrickDrawPolicy & string;
  [k: string]: unknown;
}
export interface DrawPhase {
  autobid?: Bid | null;
  bids: Bid[];
  deck: Card[];
  decks?: Deck[];
  game_mode: GameMode;
  hands: Hands;
  kitty: Card[];
  level?: MaxRank | null;
  num_decks: number;
  player_requested_reset?: number | null;
  position: number;
  propagated: PropagatedState;
  removed_cards?: Card[];
  revealed_cards?: number;
  [k: string]: unknown;
}
export interface Friend {
  card: Card;
  initial_skip: number;
  player_id?: number | null;
  skip: number;
  [k: string]: unknown;
}
export interface ExchangePhase {
  autobid?: Bid | null;
  bids?: Bid[];
  decks?: Deck[];
  epoch?: number;
  exchanger: number;
  finalized?: boolean;
  game_mode: GameMode;
  hands: Hands;
  kitty: Card[];
  kitty_size: number;
  landlord: number;
  num_decks: number;
  player_requested_reset?: number | null;
  propagated: PropagatedState;
  removed_cards?: Card[];
  trump: Trump;
  [k: string]: unknown;
}
export interface PlayPhase {
  decks?: Deck[];
  exchanger: number;
  game_ended_early: boolean;
  game_mode: GameMode;
  hands: Hands;
  kitty: Card[];
  landlord: number;
  landlords_team: number[];
  last_trick?: Trick | null;
  num_decks: number;
  penalties: {
    [k: string]: number;
  };
  player_requested_reset?: number | null;
  points: {
    [k: string]: Card[];
  };
  propagated: PropagatedState;
  removed_cards?: Card[];
  trick: Trick;
  trump: Trump;
  [k: string]: unknown;
}
export interface BroadcastMessage {
  actor: number;
  actor_name: string;
  variant: MessageVariant;
  [k: string]: unknown;
}
export interface PlayerGameFinishedResult {
  confetti: boolean;
  is_defending: boolean;
  is_landlord: boolean;
  rank: MaxRank;
  ranks_up: number;
  won_game: boolean;
  [k: string]: unknown;
}
export interface NextThresholdReachableRequest {
  decks: Deck[];
  non_landlord_points: number;
  observed_points: number;
  params: GameScoringParameters;
  [k: string]: unknown;
}
export interface SortAndGroupCardsRequest {
  cards: Card[];
  trump: Trump;
  [k: string]: unknown;
}
export interface SortAndGroupCardsResponse {
  results: SuitGroup[];
  [k: string]: unknown;
}
export interface SuitGroup {
  cards: Card[];
  suit: EffectiveSuit;
  [k: string]: unknown;
}
